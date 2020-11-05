expect(await {{ labels.singular }}UpdatePage.get{{capitalize name}}Input()).to.endsWith(
    fileNameToUpload,
    'Expected {{capitalize name}} value to be end with ' + fileNameToUpload
  );