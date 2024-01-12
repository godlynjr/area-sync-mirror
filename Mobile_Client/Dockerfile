# FROM node:20 as builder
FROM reactnativecommunity/react-native-android as builder

RUN npm install -g n && n latest

WORKDIR /app

COPY package*.json ./

RUN npm install --no-optional

COPY . /app

RUN cd android && ./gradlew assembleDebug

FROM node:20

WORKDIR /app

COPY --from=builder /app/android/app/build/outputs/apk/debug/app-debug.apk /app/client.apk
