SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "app/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-typescript": "github:frankwallis/plugin-typescript@5.0.9",
      "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
      "os": "github:jspm/nodelibs-os@0.2.0-alpha",
      "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
      "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
      "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
      "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
      "util": "github:jspm/nodelibs-util@0.2.0-alpha",
      "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
      "process": "github:jspm/nodelibs-process@0.2.0-alpha",
      "events": "github:jspm/nodelibs-events@0.2.0-alpha",
      "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
      "path": "github:jspm/nodelibs-path@0.2.0-alpha",
      "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
      "readline": "github:jspm/nodelibs-readline@0.2.0-alpha"
    },
    "packages": {
      "github:frankwallis/plugin-typescript@5.0.9": {
        "map": {
          "typescript": "npm:typescript@2.1.0-dev.20160821"
        }
      },
      "github:jspm/nodelibs-crypto@0.2.0-alpha": {
        "map": {
          "crypto-browserify": "npm:crypto-browserify@3.11.0"
        }
      },
      "github:jspm/nodelibs-os@0.2.0-alpha": {
        "map": {
          "os-browserify": "npm:os-browserify@0.2.1"
        }
      },
      "npm:crypto-browserify@3.11.0": {
        "map": {
          "create-ecdh": "npm:create-ecdh@4.0.0",
          "browserify-cipher": "npm:browserify-cipher@1.0.0",
          "inherits": "npm:inherits@2.0.1",
          "create-hash": "npm:create-hash@1.1.2",
          "public-encrypt": "npm:public-encrypt@4.0.0",
          "browserify-sign": "npm:browserify-sign@4.0.0",
          "randombytes": "npm:randombytes@2.0.3",
          "create-hmac": "npm:create-hmac@1.1.4",
          "pbkdf2": "npm:pbkdf2@3.0.4",
          "diffie-hellman": "npm:diffie-hellman@5.0.2"
        }
      },
      "npm:create-hash@1.1.2": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "cipher-base": "npm:cipher-base@1.0.2",
          "sha.js": "npm:sha.js@2.4.5",
          "ripemd160": "npm:ripemd160@1.0.1"
        }
      },
      "npm:public-encrypt@4.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "randombytes": "npm:randombytes@2.0.3",
          "bn.js": "npm:bn.js@4.11.6",
          "parse-asn1": "npm:parse-asn1@5.0.0",
          "browserify-rsa": "npm:browserify-rsa@4.0.1"
        }
      },
      "npm:browserify-sign@4.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "create-hmac": "npm:create-hmac@1.1.4",
          "inherits": "npm:inherits@2.0.1",
          "bn.js": "npm:bn.js@4.11.6",
          "parse-asn1": "npm:parse-asn1@5.0.0",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "elliptic": "npm:elliptic@6.3.1"
        }
      },
      "npm:create-hmac@1.1.4": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "npm:pbkdf2@3.0.4": {
        "map": {
          "create-hmac": "npm:create-hmac@1.1.4"
        }
      },
      "npm:diffie-hellman@5.0.2": {
        "map": {
          "randombytes": "npm:randombytes@2.0.3",
          "bn.js": "npm:bn.js@4.11.6",
          "miller-rabin": "npm:miller-rabin@4.0.0"
        }
      },
      "npm:browserify-cipher@1.0.0": {
        "map": {
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "browserify-des": "npm:browserify-des@1.0.0"
        }
      },
      "npm:create-ecdh@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "elliptic": "npm:elliptic@6.3.1"
        }
      },
      "npm:browserify-aes@1.0.6": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "inherits": "npm:inherits@2.0.1",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "cipher-base": "npm:cipher-base@1.0.2",
          "buffer-xor": "npm:buffer-xor@1.0.3"
        }
      },
      "npm:evp_bytestokey@1.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2"
        }
      },
      "npm:browserify-des@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "cipher-base": "npm:cipher-base@1.0.2",
          "des.js": "npm:des.js@1.0.0"
        }
      },
      "npm:parse-asn1@5.0.0": {
        "map": {
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "create-hash": "npm:create-hash@1.1.2",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "pbkdf2": "npm:pbkdf2@3.0.4",
          "asn1.js": "npm:asn1.js@4.8.0"
        }
      },
      "npm:cipher-base@1.0.2": {
        "map": {
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "npm:sha.js@2.4.5": {
        "map": {
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "npm:miller-rabin@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "brorand": "npm:brorand@1.0.5"
        }
      },
      "npm:browserify-rsa@4.0.1": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "randombytes": "npm:randombytes@2.0.3"
        }
      },
      "npm:des.js@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:elliptic@6.3.1": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "inherits": "npm:inherits@2.0.1",
          "brorand": "npm:brorand@1.0.5",
          "hash.js": "npm:hash.js@1.0.3"
        }
      },
      "npm:asn1.js@4.8.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "inherits": "npm:inherits@2.0.1",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:hash.js@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "github:jspm/nodelibs-stream@0.2.0-alpha": {
        "map": {
          "stream-browserify": "npm:stream-browserify@2.0.1"
        }
      },
      "npm:stream-browserify@2.0.1": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "readable-stream": "npm:readable-stream@2.1.5"
        }
      },
      "npm:readable-stream@2.1.5": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "util-deprecate": "npm:util-deprecate@1.0.2",
          "process-nextick-args": "npm:process-nextick-args@1.0.7",
          "isarray": "npm:isarray@1.0.0",
          "string_decoder": "npm:string_decoder@0.10.31",
          "core-util-is": "npm:core-util-is@1.0.2",
          "buffer-shims": "npm:buffer-shims@1.0.0"
        }
      },
      "github:jspm/nodelibs-buffer@0.2.0-alpha": {
        "map": {
          "buffer-browserify": "npm:buffer@4.9.1"
        }
      },
      "npm:buffer@4.9.1": {
        "map": {
          "isarray": "npm:isarray@1.0.0",
          "ieee754": "npm:ieee754@1.1.6",
          "base64-js": "npm:base64-js@1.1.2"
        }
      },
      "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
        "map": {
          "string_decoder-browserify": "npm:string_decoder@0.10.31"
        }
      }
    }
  },
  transpiler: "plugin-typescript",
  typescriptOptions: {
    "tsconfig": true
  },
  packages: {
    "app": {
      "main": "main.ts",
      "format": "esm",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "aurelia-binding": "npm:aurelia-binding@1.0.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.1",
    "aurelia-history": "npm:aurelia-history@1.0.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging": "npm:aurelia-logging@1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
    "aurelia-pal": "npm:aurelia-pal@1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
    "aurelia-path": "npm:aurelia-path@1.0.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0",
    "aurelia-router": "npm:aurelia-router@1.0.2",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0",
    "aurelia-templating": "npm:aurelia-templating@1.0.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0"
  },
  packages: {}
});
