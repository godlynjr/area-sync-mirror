FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

RUN npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

RUN cd android && ./gradlew assembleDebug

# EXPOSE 81

VOLUME /app/build/outputs/apk/

CMD npx react-native run-android