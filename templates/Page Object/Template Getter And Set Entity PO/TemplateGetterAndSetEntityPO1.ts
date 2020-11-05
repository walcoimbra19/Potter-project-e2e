async set{{capitalize name}}Input({{name}}: string): Promise<void> {
    await this.{{name}}Input.sendKeys({{name}});
  }

async get{{capitalize name}}Input(): Promise<string> {
    return await this.{{name}}Input.getAttribute('value');
  }