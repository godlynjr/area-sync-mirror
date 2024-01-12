# FROM node:20 as builder
FROM reactnativecommunity/react-native-android

# RUN apt-get update && \
#     # echo "Y" | apt-get install openjdk-8-jre && \
#     echo "Y" | apt-get install openjdk-17-jdk && \
#     echo "Y" | apt-get install -y unzip && \
#     echo "Y" | apt-get clean && java --version

# ENV ANDROID_HOME=/opt/android
# RUN wget https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip -O android-sdk.zip && \
#     unzip -d $ANDROID_HOME android-sdk.zip && \
#     rm android-sdk.zip

# ENVPATH $PATH:$ANDROID_HOME/tools/bin

# RUN cd $ANDROID_HOME/tools/bin && echo "y" | sdkmanager --licenses

# RUN sdkmanager "ndk;21.4.7075529"

RUN npm install -g n && n latest

WORKDIR /app

COPY package*.json ./

# RUN npm install

COPY . /app

# RUN npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

# RUN cd android && ./gradlew assembleDebug

# FROM node:20

# WORKDIR /app

# COPY --from=builder /app/android/app/build/outputs/apk/debug/app-debug.apk /app/client.apk

# mv licenses /opt/android
