#!/usr/bin/env node

import * as args from "args";

args
  .command("add", "Installs a package")
  .command("remove", "remove the package")
  .examples([
    {
      description: "Install all packages",
      usage: "yame"
    }
  ]);

const flags = args.parse(process.argv);
