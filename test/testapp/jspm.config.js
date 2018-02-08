SystemJS.config({
    paths: {
        "github:": "jspm_packages/github/",
        "npm:": "jspm_packages/npm/"
    },
    packages: {
        "src": {
            "format": "esm",
            "main": "main",
            "defaultExtension": "ts",
            "meta": {
                "*.ts": {
                    "loader": "plugin-typescript"
                },
                "*.js": {
                    "loader": "plugin-typescript"
                }
            }
        },
        "test": {
            "format": "esm",
            "main": "test",
            "defaultExtension": "ts",
            "meta": {
                "*.ts": {
                    "loader": "plugin-typescript"
                },
                "*.js": {
                    "loader": "plugin-typescript"
                }
            }
        },
        "shared": {
            "format": "esm",
            "defaultExtension": "ts",
            "meta": {
                "*.ts": {
                    "loader": "plugin-typescript"
                },
                "*.js": {
                    "loader": "plugin-typescript"
                }
            }
        },
        "src/app": {
            "format": "esm",
            "defaultExtension": "ts",
            "meta": {
                "*.ts": {
                    "loader": "plugin-typescript"
                },
                "*.js": {
                    "loader": "plugin-typescript"
                },
                "*.css": {
                    "loader": "css"
                }
            }
        },
        "npm:font-awesome@4.6.3": {
            "meta": {
                "*.css": {
                    "loader": "css"
                }
            },
            "map": {
                "css": "github:systemjs/plugin-css@0.1.27"
            }
        },
        "npm:supports-color@3.1.2": {
            "map": {
                "has-flag": "npm:has-flag@1.0.0"
            }
        },
        "github:mobilexag/plugin-sass@0.4.6": {
            "map": {
                "url": "npm:jspm-nodelibs-url@0.2.0",
                "fs": "npm:jspm-nodelibs-fs@0.2.0",
                "reqwest": "github:ded/reqwest@2.0.5",
                "sass.js": "npm:sass.js@0.9.12",
                "path": "npm:jspm-nodelibs-path@0.2.0",
                "lodash": "npm:lodash@4.15.0",
                "autoprefixer": "npm:autoprefixer@6.4.1",
                "postcss": "npm:postcss@5.1.2"
            }
        },
        "github:twbs/bootstrap@3.3.7": {
            "map": {
                "jquery": "npm:jquery@2.2.4"
            }
        },
        "npm:postcss@5.1.2": {
            "map": {
                "source-map": "npm:source-map@0.5.6",
                "js-base64": "npm:js-base64@2.1.9",
                "supports-color": "npm:supports-color@3.1.2"
            }
        },
        "npm:autoprefixer@6.4.1": {
            "map": {
                "postcss": "npm:postcss@5.1.2",
                "browserslist": "npm:browserslist@1.3.6",
                "normalize-range": "npm:normalize-range@0.1.2",
                "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
                "num2fraction": "npm:num2fraction@1.2.2",
                "caniuse-db": "npm:caniuse-db@1.0.30000528"
            }
        },
        "npm:browserslist@1.3.6": {
            "map": {
                "caniuse-db": "npm:caniuse-db@1.0.30000528"
            }
        },
        "npm:resumer@0.0.0": {
            "map": {
                "through": "npm:through@2.3.8"
            }
        },
        "npm:has@1.0.1": {
            "map": {
                "function-bind": "npm:function-bind@1.1.0"
            }
        },
        "npm:string.prototype.trim@1.1.2": {
            "map": {
                "function-bind": "npm:function-bind@1.1.0",
                "es-abstract": "npm:es-abstract@1.6.1",
                "define-properties": "npm:define-properties@1.1.2"
            }
        },
        "npm:es-to-primitive@1.1.1": {
            "map": {
                "is-callable": "npm:is-callable@1.1.3",
                "is-symbol": "npm:is-symbol@1.0.1",
                "is-date-object": "npm:is-date-object@1.0.1"
            }
        },
        "npm:define-properties@1.1.2": {
            "map": {
                "foreach": "npm:foreach@2.0.5",
                "object-keys": "npm:object-keys@1.0.11"
            }
        },
        "npm:inflight@1.0.5": {
            "map": {
                "once": "npm:once@1.3.3",
                "wrappy": "npm:wrappy@1.0.2"
            }
        },
        "npm:once@1.3.3": {
            "map": {
                "wrappy": "npm:wrappy@1.0.2"
            }
        },
        "npm:tape@4.6.0": {
            "map": {
                "glob": "npm:glob@7.0.6",
                "inherits": "npm:inherits@2.0.1",
                "resumer": "npm:resumer@0.0.0",
                "has": "npm:has@1.0.1",
                "defined": "npm:defined@1.0.0",
                "object-inspect": "npm:object-inspect@1.2.1",
                "deep-equal": "npm:deep-equal@1.0.1",
                "minimist": "npm:minimist@1.2.0",
                "resolve": "npm:resolve@1.1.7",
                "through": "npm:through@2.3.8",
                "string.prototype.trim": "npm:string.prototype.trim@1.1.2",
                "function-bind": "npm:function-bind@1.1.0"
            }
        },
        "npm:brace-expansion@1.1.6": {
            "map": {
                "concat-map": "npm:concat-map@0.0.1",
                "balanced-match": "npm:balanced-match@0.4.2"
            }
        },
        "npm:minimatch@3.0.3": {
            "map": {
                "brace-expansion": "npm:brace-expansion@1.1.6"
            }
        },
        "npm:glob@7.0.6": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "path-is-absolute": "npm:path-is-absolute@1.0.0",
                "minimatch": "npm:minimatch@3.0.3",
                "fs.realpath": "npm:fs.realpath@1.0.0",
                "once": "npm:once@1.3.3",
                "inflight": "npm:inflight@1.0.5"
            }
        },
        "npm:es-abstract@1.6.1": {
            "map": {
                "function-bind": "npm:function-bind@1.1.0",
                "is-callable": "npm:is-callable@1.1.3",
                "is-regex": "npm:is-regex@1.0.3",
                "es-to-primitive": "npm:es-to-primitive@1.1.1"
            }
        }
    },
    browserConfig: {
        "baseURL": "/"
    },
    devConfig: {
        "map": {
            "plugin-typescript": "github:frankwallis/plugin-typescript@7.0.6",
            "readline": "npm:jspm-nodelibs-readline@0.2.0",
            "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0",
            "net": "npm:jspm-nodelibs-net@0.2.0",
            "module": "npm:jspm-nodelibs-module@0.2.0",
            "typescript": "npm:typescript@2.4.1"
        },
        "packages": {
            "npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0": {
                "map": {
                    "babel-runtime": "npm:babel-runtime@6.11.6"
                }
            },
            "npm:source-map-support@0.4.15": {
                "map": {
                    "source-map": "npm:source-map@0.5.6"
                }
            },
            "npm:typescript@2.4.1": {
                "map": {
                    "source-map-support": "npm:source-map-support@0.4.15"
                }
            }
        }
    },
    transpiler: "plugin-typescript",
    typescriptOptions: {
        "typeCheck": false,
        "tsconfig": true,
        "target": "es6",
        "module": "system"
    },
    map: {
        "aurelia-testing": "npm:aurelia-testing@1.0.0-beta.2.0.0",
        "bootstrap-css": "github:twbs/bootstrap@3.3.7/dist/css/bootstrap.css",
        "aurelia-http-client": "npm:aurelia-http-client@1.0.0",
        "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0",
        "bootstrap": "github:twbs/bootstrap@3.3.7",
        "css": "github:systemjs/plugin-css@0.1.27",
        "dgram": "npm:jspm-nodelibs-dgram@0.2.0",
        "dns": "npm:jspm-nodelibs-dns@0.2.0",
        "font-awesome": "npm:font-awesome@4.6.3",
        "http": "npm:jspm-nodelibs-http@0.2.0",
        "https": "npm:jspm-nodelibs-https@0.2.0",
        "jquery": "npm:jquery@2.2.4",
        "jquery-contextmenu": "npm:jquery-contextmenu@2.2.4",
        "punycode": "npm:jspm-nodelibs-punycode@0.2.0",
        "querystring": "npm:jspm-nodelibs-querystring@0.2.0",
        "sass": "github:mobilexag/plugin-sass@0.4.6",
        "tape": "npm:tape@4.6.0",
        "tls": "npm:jspm-nodelibs-tls@0.2.0",
        "tty": "npm:jspm-nodelibs-tty@0.2.0",
        "url": "npm:jspm-nodelibs-url@0.2.0",
        "zlib": "npm:jspm-nodelibs-zlib@0.2.0"
    }
});

SystemJS.config({
    packageConfigPaths: [
        "github:*/*.json",
        "npm:@*/*.json",
        "npm:*.json"
    ],
    map: {
        "aurelia-dialog": "npm:aurelia-dialog@1.0.0-rc.1.0.3",
        "aurelia-bootstrap": "github:tochoromero/aurelia-bootstrap@0.1.19",
        "babel-plugin-transform-async-to-module-method": "npm:babel-plugin-transform-async-to-module-method@6.8.0",
        "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
        "babel-plugin-transform-flow-strip-types": "npm:babel-plugin-transform-flow-strip-types@6.14.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "aurelia-binding": "npm:aurelia-binding@1.2.1",
        "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
        "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
        "aurelia-framework": "npm:aurelia-framework@1.0.2",
        "aurelia-history": "npm:aurelia-history@1.0.0",
        "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
        "aurelia-loader": "npm:aurelia-loader@1.0.0",
        "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
        "aurelia-logging": "npm:aurelia-logging@1.3.1",
        "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
        "aurelia-pal": "npm:aurelia-pal@1.3.0",
        "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
        "aurelia-path": "npm:aurelia-path@1.1.1",
        "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0",
        "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0",
        "aurelia-router": "npm:aurelia-router@1.0.2",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
        "aurelia-templating": "npm:aurelia-templating@1.4.2",
        "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
        "aurelia-templating-resources": "npm:aurelia-templating-resources@1.4.0",
        "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0",
        "assert": "npm:jspm-nodelibs-assert@0.2.0",
        "buffer": "npm:jspm-nodelibs-buffer@0.2.0",
        "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
        "constants": "npm:jspm-nodelibs-constants@0.2.0",
        "core-js": "npm:core-js@2.4.1",
        "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
        "events": "npm:jspm-nodelibs-events@0.2.0",
        "fs": "npm:jspm-nodelibs-fs@0.2.0",
        "os": "npm:jspm-nodelibs-os@0.2.0",
        "path": "npm:jspm-nodelibs-path@0.2.0",
        "process": "npm:jspm-nodelibs-process@0.2.0",
        "stream": "npm:jspm-nodelibs-stream@0.2.0",
        "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
        "util": "npm:jspm-nodelibs-util@0.2.0",
        "vm": "npm:jspm-nodelibs-vm@0.2.0"
    },
    packages: {
        "npm:crypto-browserify@3.11.0": {
            "map": {
                "create-ecdh": "npm:create-ecdh@4.0.0",
                "inherits": "npm:inherits@2.0.1",
                "public-encrypt": "npm:public-encrypt@4.0.0",
                "pbkdf2": "npm:pbkdf2@3.0.4",
                "browserify-cipher": "npm:browserify-cipher@1.0.0",
                "create-hmac": "npm:create-hmac@1.1.4",
                "diffie-hellman": "npm:diffie-hellman@5.0.2",
                "randombytes": "npm:randombytes@2.0.3",
                "create-hash": "npm:create-hash@1.1.2",
                "browserify-sign": "npm:browserify-sign@4.0.0"
            }
        },
        "npm:pbkdf2@3.0.4": {
            "map": {
                "create-hmac": "npm:create-hmac@1.1.4"
            }
        },
        "npm:create-hmac@1.1.4": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "create-hash": "npm:create-hash@1.1.2"
            }
        },
        "npm:create-ecdh@4.0.0": {
            "map": {
                "elliptic": "npm:elliptic@6.3.1",
                "bn.js": "npm:bn.js@4.11.6"
            }
        },
        "npm:public-encrypt@4.0.0": {
            "map": {
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "bn.js": "npm:bn.js@4.11.6",
                "randombytes": "npm:randombytes@2.0.3",
                "create-hash": "npm:create-hash@1.1.2",
                "parse-asn1": "npm:parse-asn1@5.0.0"
            }
        },
        "npm:browserify-cipher@1.0.0": {
            "map": {
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "browserify-des": "npm:browserify-des@1.0.0"
            }
        },
        "npm:diffie-hellman@5.0.2": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "randombytes": "npm:randombytes@2.0.3",
                "miller-rabin": "npm:miller-rabin@4.0.0"
            }
        },
        "npm:browserify-rsa@4.0.1": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "randombytes": "npm:randombytes@2.0.3"
            }
        },
        "npm:browserify-aes@1.0.6": {
            "map": {
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "inherits": "npm:inherits@2.0.1",
                "create-hash": "npm:create-hash@1.1.2",
                "cipher-base": "npm:cipher-base@1.0.2",
                "buffer-xor": "npm:buffer-xor@1.0.3"
            }
        },
        "npm:browserify-des@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "cipher-base": "npm:cipher-base@1.0.2",
                "des.js": "npm:des.js@1.0.0"
            }
        },
        "npm:hash.js@1.0.3": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:evp_bytestokey@1.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2"
            }
        },
        "npm:create-hash@1.1.2": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "cipher-base": "npm:cipher-base@1.0.2",
                "ripemd160": "npm:ripemd160@1.0.1",
                "sha.js": "npm:sha.js@2.4.5"
            }
        },
        "npm:cipher-base@1.0.2": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:des.js@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:browserify-sign@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "create-hash": "npm:create-hash@1.1.2",
                "create-hmac": "npm:create-hmac@1.1.4",
                "elliptic": "npm:elliptic@6.3.1",
                "inherits": "npm:inherits@2.0.1",
                "parse-asn1": "npm:parse-asn1@5.0.0"
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
        "npm:sha.js@2.4.5": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:stream-browserify@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "readable-stream": "npm:readable-stream@2.1.5"
            }
        },
        "npm:miller-rabin@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "brorand": "npm:brorand@1.0.5"
            }
        },
        "npm:elliptic@6.3.1": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "bn.js": "npm:bn.js@4.11.6",
                "hash.js": "npm:hash.js@1.0.3",
                "brorand": "npm:brorand@1.0.5"
            }
        },
        "npm:asn1.js@4.8.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "inherits": "npm:inherits@2.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:buffer@4.9.1": {
            "map": {
                "base64-js": "npm:base64-js@1.1.2",
                "ieee754": "npm:ieee754@1.1.6",
                "isarray": "npm:isarray@1.0.0"
            }
        },
        "npm:readable-stream@2.1.5": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "core-util-is": "npm:core-util-is@1.0.2",
                "string_decoder": "npm:string_decoder@0.10.31",
                "process-nextick-args": "npm:process-nextick-args@1.0.7",
                "isarray": "npm:isarray@1.0.0",
                "util-deprecate": "npm:util-deprecate@1.0.2",
                "buffer-shims": "npm:buffer-shims@1.0.0"
            }
        },
        "npm:babel-plugin-transform-flow-strip-types@6.14.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.11.6",
                "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.13.0"
            }
        },
        "npm:babel-plugin-transform-decorators-legacy@1.3.4": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.11.6",
                "babel-template": "npm:babel-template@6.15.0",
                "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0"
            }
        },
        "npm:babel-runtime@6.11.6": {
            "map": {
                "core-js": "npm:core-js@2.4.1",
                "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
            }
        },
        "npm:babel-template@6.15.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.11.6",
                "lodash": "npm:lodash@4.15.0",
                "babel-traverse": "npm:babel-traverse@6.15.0",
                "babel-types": "npm:babel-types@6.15.0",
                "babylon": "npm:babylon@6.9.2"
            }
        },
        "npm:babel-plugin-transform-async-to-module-method@6.8.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.11.6",
                "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.13.0",
                "babel-types": "npm:babel-types@6.15.0",
                "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.11.2"
            }
        },
        "npm:babel-traverse@6.15.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.11.6",
                "babel-types": "npm:babel-types@6.15.0",
                "lodash": "npm:lodash@4.15.0",
                "babylon": "npm:babylon@6.9.2",
                "invariant": "npm:invariant@2.2.1",
                "babel-messages": "npm:babel-messages@6.8.0",
                "babel-code-frame": "npm:babel-code-frame@6.11.0",
                "debug": "npm:debug@2.2.0",
                "globals": "npm:globals@8.18.0"
            }
        },
        "npm:babel-types@6.15.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.11.6",
                "lodash": "npm:lodash@4.15.0",
                "to-fast-properties": "npm:to-fast-properties@1.0.2",
                "esutils": "npm:esutils@2.0.2"
            }
        },
        "npm:babel-helper-remap-async-to-generator@6.11.2": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.11.6",
                "babel-template": "npm:babel-template@6.15.0",
                "babel-types": "npm:babel-types@6.15.0",
                "babel-traverse": "npm:babel-traverse@6.15.0",
                "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0"
            }
        },
        "npm:babel-messages@6.8.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.11.6"
            }
        },
        "npm:babel-helper-function-name@6.8.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.11.6",
                "babel-types": "npm:babel-types@6.15.0",
                "babel-traverse": "npm:babel-traverse@6.15.0",
                "babel-template": "npm:babel-template@6.15.0",
                "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0"
            }
        },
        "npm:babel-code-frame@6.11.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.11.6",
                "esutils": "npm:esutils@2.0.2",
                "js-tokens": "npm:js-tokens@2.0.0",
                "chalk": "npm:chalk@1.1.3"
            }
        },
        "npm:invariant@2.2.1": {
            "map": {
                "loose-envify": "npm:loose-envify@1.2.0"
            }
        },
        "npm:loose-envify@1.2.0": {
            "map": {
                "js-tokens": "npm:js-tokens@1.0.3"
            }
        },
        "npm:babel-helper-get-function-arity@6.8.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.11.6",
                "babel-types": "npm:babel-types@6.15.0"
            }
        },
        "npm:debug@2.2.0": {
            "map": {
                "ms": "npm:ms@0.7.1"
            }
        },
        "npm:chalk@1.1.3": {
            "map": {
                "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
                "has-ansi": "npm:has-ansi@2.0.0",
                "ansi-styles": "npm:ansi-styles@2.2.1",
                "strip-ansi": "npm:strip-ansi@3.0.1",
                "supports-color": "npm:supports-color@2.0.0"
            }
        },
        "npm:has-ansi@2.0.0": {
            "map": {
                "ansi-regex": "npm:ansi-regex@2.0.0"
            }
        },
        "npm:strip-ansi@3.0.1": {
            "map": {
                "ansi-regex": "npm:ansi-regex@2.0.0"
            }
        },
        "npm:jspm-nodelibs-string_decoder@0.2.0": {
            "map": {
                "string_decoder-browserify": "npm:string_decoder@0.10.31"
            }
        },
        "npm:jspm-nodelibs-buffer@0.2.0": {
            "map": {
                "buffer-browserify": "npm:buffer@4.9.1"
            }
        },
        "npm:jspm-nodelibs-crypto@0.2.0": {
            "map": {
                "crypto-browserify": "npm:crypto-browserify@3.11.0"
            }
        },
        "npm:jspm-nodelibs-stream@0.2.0": {
            "map": {
                "stream-browserify": "npm:stream-browserify@2.0.1"
            }
        },
        "npm:jspm-nodelibs-os@0.2.0": {
            "map": {
                "os-browserify": "npm:os-browserify@0.2.1"
            }
        },
        "github:tochoromero/aurelia-bootstrap@0.1.19": {
            "map": {
                "velocity-animate": "npm:velocity-animate@1.5.0",
                "tether": "npm:tether@1.4.0",
                "aurelia-templating-resources": "npm:aurelia-templating-resources@1.4.0"
            }
        }
    }
});