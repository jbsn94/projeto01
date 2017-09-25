# Projeto01 **v1.0.0(Beta)**

## O que é o **Projeto01**?
- É um aplicativo mobile utilizado para reunir publicações dos mais variados
blogs para facilitar a visualização dessas informações. 

## Quais as tecnologias usadas?
- Para criação do aplicativo utilizados o Framework **[Ionic](https://ionicframework.com/)** na versão **3.6.1** e o **AngularJs** na versão **4.0.0**.

## Quais as features implementadas?
1. Listagens de Postagens.
2. Paginação das postagens utilizando [InfiniteScroll](https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/).
3. transformações de dados recebidos em **xml** para **Json**.
4. Visualização de imagens utilizando o [ionicImageViewer](https://github.com/Riron/ionic-img-viewer).
5. Compartilhamento de postagens para Whatsapp, E-mail, Facebook e entre outros utilizando o componente [Social sharing](https://ionicframework.com/docs/native/social-sharing/).

## Profximas features:
1. [Lazyload Img](https://www.npmjs.com/package/ng2-lazyload-image)
2. [Lazyload Img](https://www.npmjs.com/package/ionic-image-loader)

# Gerando a apk de produção

1. Gerar o keystore
```
$ keytool -genkey -v -keystore minha-chave.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
```
2. Gerar a apk de produção
```
$ ionic cordova build android --prod --optimizejs --minifycss --minifyjs --release
```
3. Assinar a apk com a keystore gerada previamente 
```
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore minha-chave.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk alias_name
```
4. Aplica o zipalign na apk assinada
```
$ C:\Users\CLIENTE\AppData\Local\Android\sdk\build-tools\25.0.3\zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk bezerrosdigital.apk
```
