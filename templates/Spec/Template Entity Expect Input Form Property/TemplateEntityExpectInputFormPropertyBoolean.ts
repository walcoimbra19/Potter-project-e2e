const selected{{capitalize name}} = {{ labels.singular }}UpdatePage.get{{capitalize name}}Input();
    if (await selected{{capitalize name}}.isSelected()) {
      await {{ labels.singular }}UpdatePage.get{{capitalize name}}Input().click();
      expect(await {{ labels.singular }}UpdatePage.get{{capitalize name}}Input().isSelected(), 'Expected {{name}} not to be selected').to.be.false;
    } else {
      await {{ labels.singular }}UpdatePage.get{{capitalize name}}Input().click();
      expect(await {{ labels.singular }}UpdatePage.get{{capitalize name}}Input().isSelected(), 'Expected {{name}} to be selected').to.be.true;
    }