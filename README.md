# scrivito-salesforce-widget
A Scrivito widget to capture leads and submit to Salesforce

[![CMS: Scrivito](https://img.shields.io/badge/CMS-Scrivito-brightgreen.svg)](https://scrivito.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![GitHub last commit](https://img.shields.io/github/last-commit/Agsiegert/scrivito-salesforce-widget.svg)](https://github.com/Agsiegert/scrivito-salesforce-widget) [![GitHub top language](https://img.shields.io/github/languages/top/Agsiegert/scrivito-salesforce-widget.svg)](https://github.com/Agsiegert/scrivito-salesforce-widget)

## Screenshot

![screenshot](https://raw.githubusercontent.com/agsiegert/scrivito-salesforce-widget/master/salesforce-screenshot.png)

## Installation

Install the package in your scrivito app:

```shell
$ npm install scrivito-salesforce-widget
```

Import the widget in your javascript (e.g. in `src/Widgets/index.js`):

```js
import "scrivito-salesforce-widget";
```

## To use this widget

This widget is designed to be used with Salesforce web-to-lead. To use this widget [setup a web-to-lead form](https://help.salesforce.com/articleView?id=setting_up_web-to-lead.htm&type=5).


## Widget Configuration
In the widget properties you can set:
- Agreement text
- Button Text
- Background color
- Salesforce Organization ID
- Return URL

## Check code quality

```shell
$ npm run eslint
```
and
```shell
$ npm run es-check
```
