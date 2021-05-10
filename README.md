# Caesar cipher CLI tool

## About CLI tool

This is a console application to encode / decode text using [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher). This cipher changes each letter of the Latin font to another of the same letter of the font with a fixed position offset.

## Instruction

Clone the [repository](https://github.com/tsaminsk/Ceasar_cipher_CLI_tool/tree/dev), go to branch "dev" and run "npm install"

To run the CLI app type in the terminal "node src/main.js" and add options:

    "-a" or "--action": required, could be "encode" or "decode";
    "-s" or "--shift": required, must be integer, could be negative;
    "-i" or "--input": optional, a path to input file, file should exist or throw error; if option missing - stdin;
    "-o" or "--output": optional, a path to output file, file should exist or throw error; if option missing - stdout;

**Examples:**
* node src/main -a decode -s 3 -i ../demo/input.txt -o ../demo/output.txt
* node src/main -a decode -s -2 -o ../demo/output.txt
* node src/main -a encode -s 5
* node src/main --action decode --shift 15 --input ../demo/input.txt --output ../demo/output.txt