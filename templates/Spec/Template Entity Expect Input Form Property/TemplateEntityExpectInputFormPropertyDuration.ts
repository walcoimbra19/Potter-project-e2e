expect(await {{ labels.singular }}UpdatePage.get{{capitalize name}}Input()).to.contain('12', 'Expected {{capitalize name}} value to be equals to 12');