import 'dotenv/config'

import * as admin from 'firebase-admin'

interface Message {
  title: string
  body: string
}

if (!process.env.FIREBASE_CREDENTIAL_PROJECT_ID) {
  throw new Error('Fill Firebase credentials')
}

const app = admin.initializeApp({
  credential: admin.credential.cert({
    clientEmail: process.env.FIREBASE_CREDENTIAL_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_CREDENTIAL_PRIVATE_KEY,
    projectId: process.env.FIREBASE_CREDENTIAL_PROJECT_ID
  })
});

export async function sendNotification (message: Message) {
  await app.messaging().sendToTopic('notification', {
    notification: {
      ...message
    }
  })
}
