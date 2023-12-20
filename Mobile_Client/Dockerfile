FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

RUN npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest android/app/build/intermediates/res/merged/debug

RUN cd android && ./gradlew assembleDebug

# EXPOSE 81

VOLUME /app/build/outputs/apk/

CMD npx react-native run-android