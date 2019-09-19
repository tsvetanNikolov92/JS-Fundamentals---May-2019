function extractFile(filePath) {
    let fileNameStart = filePath.lastIndexOf('\\') + 1;
    let fileNameEnd = filePath.lastIndexOf('.');

    let fileName = filePath.substring(fileNameStart, fileNameEnd);
    let fileExtension = filePath.substr(fileNameEnd + 1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');