# Azure Chat Features

Below are the features for the Azure Chat Solution accelerator

## 📂 Chat with file

- In the chat with file feature, you can now see citations within the responses. Simply click on the citation to access the related context.

- You can now upload files to existing chats, allowing you to chat with multiple files simultaneously.

## 🎙️ Speech

Ability to use Azure Speech in conversations. This feature is not enabled by default. To enable this feature, you must set the environment variable `PUBLIC_SPEECH_ENABLED=true` along with the Azure Speech subscription key and region.

```
PUBLIC_SPEECH_ENABLED=true
AZURE_SPEECH_REGION="REGION"
AZURE_SPEECH_KEY="1234...."
```
