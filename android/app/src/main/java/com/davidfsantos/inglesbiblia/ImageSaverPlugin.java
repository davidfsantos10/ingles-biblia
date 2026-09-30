package com.davidfsantos.inglesbiblia;

import android.Manifest;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.media.MediaScannerConnection;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Base64;
import com.getcapacitor.JSObject;
import com.getcapacitor.Logger;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.PermissionState;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

// Salva a imagem do cartão de versículo direto na galeria (álbum próprio do
// app), sem passar pelo menu de compartilhar -- diferente de Share.share(),
// que sempre abre o seletor nativo de apps. Em Android 10+ isso é feito via
// MediaStore (sem precisar de permissão nenhuma, já que o app só está
// inserindo conteúdo próprio na coleção de mídia, não lendo/alterando
// arquivos de outros apps); abaixo disso (minSdkVersion 24), cai no caminho
// legado de escrita de arquivo + permissão de armazenamento em tempo de
// execução, como os apps faziam antes do scoped storage existir.
@CapacitorPlugin(
    name = "ImageSaver",
    permissions = { @Permission(strings = { Manifest.permission.WRITE_EXTERNAL_STORAGE }, alias = "publicStorage") }
)
public class ImageSaverPlugin extends Plugin {

    private static final String ALBUM_NAME = "Inglês com a Bíblia";

    @PluginMethod
    public void saveImage(PluginCall call) {
        if (call.getString("data") == null || call.getString("fileName") == null) {
            call.reject("Faltam os parâmetros 'data' ou 'fileName'.");
            return;
        }

        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.Q && !isStoragePermissionGranted()) {
            requestAllPermissions(call, "permissionCallback");
            return;
        }

        doSaveImage(call);
    }

    @PermissionCallback
    private void permissionCallback(PluginCall call) {
        if (!isStoragePermissionGranted()) {
            call.reject("Permissão de armazenamento negada.");
            return;
        }
        doSaveImage(call);
    }

    private void doSaveImage(PluginCall call) {
        String data = call.getString("data");
        String fileName = call.getString("fileName");

        byte[] bytes;
        try {
            bytes = Base64.decode(data, Base64.DEFAULT);
        } catch (IllegalArgumentException ex) {
            call.reject("Dados de imagem inválidos.");
            return;
        }

        try {
            Uri savedUri = Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q
                ? saveImageScoped(bytes, fileName)
                : saveImageLegacy(bytes, fileName);

            JSObject result = new JSObject();
            result.put("uri", savedUri.toString());
            call.resolve(result);
        } catch (IOException ex) {
            Logger.error(getLogTag(), "Falha ao salvar imagem na galeria", ex);
            call.reject("Não foi possível salvar a imagem.", ex);
        }
    }

    private Uri saveImageScoped(byte[] bytes, String fileName) throws IOException {
        ContentResolver resolver = getContext().getContentResolver();

        ContentValues values = new ContentValues();
        values.put(MediaStore.Images.Media.DISPLAY_NAME, fileName);
        values.put(MediaStore.Images.Media.MIME_TYPE, "image/png");
        values.put(MediaStore.Images.Media.RELATIVE_PATH, Environment.DIRECTORY_PICTURES + "/" + ALBUM_NAME);
        values.put(MediaStore.Images.Media.IS_PENDING, 1);

        Uri itemUri = resolver.insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, values);
        if (itemUri == null) {
            throw new IOException("Não foi possível criar o registro de mídia.");
        }

        try (OutputStream out = resolver.openOutputStream(itemUri)) {
            if (out == null) {
                throw new IOException("Não foi possível abrir o arquivo para escrita.");
            }
            out.write(bytes);
        }

        ContentValues doneValues = new ContentValues();
        doneValues.put(MediaStore.Images.Media.IS_PENDING, 0);
        resolver.update(itemUri, doneValues, null, null);

        return itemUri;
    }

    private Uri saveImageLegacy(byte[] bytes, String fileName) throws IOException {
        File dir = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES), ALBUM_NAME);
        if (!dir.exists() && !dir.mkdirs()) {
            throw new IOException("Não foi possível criar a pasta de destino.");
        }

        File file = new File(dir, fileName);
        try (FileOutputStream out = new FileOutputStream(file)) {
            out.write(bytes);
        }

        MediaScannerConnection.scanFile(getContext(), new String[] { file.getAbsolutePath() }, new String[] { "image/png" }, null);
        return Uri.fromFile(file);
    }

    private boolean isStoragePermissionGranted() {
        return getPermissionState("publicStorage") == PermissionState.GRANTED;
    }
}
