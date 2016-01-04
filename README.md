# json-server Demo

Demo code for my [talk on quickly faking RESTful APIs](https://speakerdeck.com/jimf/faking-rest-apis-in-under-30-seconds)
for the purposes of rapid prototyping and development by making use of
`json-server` and `faker`. Here we are writing simple mock data for TodoMVC,
and then updating an example implementation (Backbone specifically, but any
should work) to make use of it.

## Getting Started

First be sure to have node and npm installed. Then install dependencies:

    $ npm install

## Usage

To run the simple static example, run:

    $ npm run simple

To run the more advanced example that makes use of faker, run:

    $ npm run advanced

While running either example, press the "s" key at any time to create a
snapshot of the state of the currently running API.

## License

The MIT License (MIT)

Copyright (c) 2015-2016 Jim Fitzpatrick

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
