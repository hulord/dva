/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 50553
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 50553
 File Encoding         : 65001

 Date: 05/08/2020 00:22:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for artical
-- ----------------------------
DROP TABLE IF EXISTS `artical`;
CREATE TABLE `artical`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `author` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '发布者id',
  `view` int(11) NULL DEFAULT NULL,
  `content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `create_time` int(11) NULL DEFAULT NULL,
  `role` tinyint(4) NULL DEFAULT NULL COMMENT '可查看权限',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 5 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of artical
-- ----------------------------
INSERT INTO `artical` VALUES (4, 'test1', 'fs', 1, '<h3>1111</h3>发士大夫<span>fdsafasadfsadf</span><h4>222</h4>发顺丰<h3>32123</h3>fasdfsfasdfsdfsdf<h4>fsdafsad</h4>asfasdffasdfsadf', 1584260505, 1);
INSERT INTO `artical` VALUES (1, 'test2', 'ff', 23, '\r\n<h3 >一简洁的JavaScript框架</h3>\r\njQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互jQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互jQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互。jQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互jQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互jQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互。\r\njQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互jQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互jQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互。\r\n<h3 id=\"1\">二jQuery的核心特性</h3>\r\njQuery的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口；具有高效灵活的css选择器，并且可对CSS选择器进行扩展；拥有便捷的插件扩展机制和丰富的插件。jQuery兼容各种主流浏览器，如IE 6.0+、FF 1.5+、Safari 2.0+、Opera 9.0+等。 jQuery的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口；具有高效灵活的css选择器，并且可对CSS选择器进行扩展；拥有便捷的插件扩展机制和丰富的插件。jQuery兼容各种主流浏览器，如IE 6.0+、FF 1.5+、Safari 2.0+、Opera 9.0+等。 jQuery的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口；具有高效灵活的css选择器，并且可对CSS选择器进行扩展；拥有便捷的插件扩展机制和丰富的插件。jQuery兼容各种主流浏览器，如IE 6.0+、FF 1.5+、Safari 2.0+、Opera 9.0+等。 jQuery的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口；具有高效灵活的css选择器，并且可对CSS选择器进行扩展；拥有便捷的插件扩展机制和丰富的插件。jQuery兼容各种主流浏览器，如IE 6.0+、FF 1.5+、Safari 2.0+、Opera 9.0+等。 jQuery的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口；具有高效灵活的css选择器，并且可对CSS选择器进行扩展；拥有便捷的插件扩展机制和丰富的插件。jQuery兼容各种主流浏览器，如IE 6.0+、FF 1.5+、Safari 2.0+、Opera 9.0+等。 jQuery的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口；具有高效灵活的css选择器，并且可对CSS选择器进行扩展；拥有便捷的插件扩展机制和丰富的插件。jQuery兼容各种主流浏览器，如IE 6.0+、FF 1.5+、Safari 2.0+、Opera 9.0+等。 jQuery的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口；具有高效灵活的css选择器，并且可对CSS选择器进行扩展；拥有便捷的插件扩展机制和丰富的插件。jQuery兼容各种主流浏览器，如IE 6.0+、FF 1.5+、Safari 2.0+、Opera 9.0+等。 jQuery的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口；具有高效灵活的css选择器，并且可对CSS选择器进行扩展；拥有便捷的插件扩展机制和丰富的插件。jQuery兼容各种主流浏览器，如IE 6.0+、FF 1.5+、Safari 2.0+、Opera 9.0+等。 jQuery的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口；具有高效灵活的css选择器，并且可对CSS选择器进行扩展；拥有便捷的插件扩展机制和丰富的插件。jQuery兼容各种主流浏览器，如IE 6.0+、FF 1.5+、Safari 2.0+、Opera 9.0+等。 jQuery的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口；具有高效灵活的css选择器，并且可对CSS选择器进行扩展；拥有便捷的插件扩展机制和丰富的插件。jQuery兼容各种主流浏览器，如IE 6.0+、FF 1.5+、Safari 2.0+、Opera 9.0+等。 jQuery的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口；具有高效灵活的css选择器，并且可对CSS选择器进行扩展；拥有便捷的插件扩展机制和丰富的插件。jQuery兼容各种主流浏览器，如IE 6.0+、FF 1.5+、Safari 2.0+、Opera 9.0+等。 jQuery的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口；具有高效灵活的css选择器，并且可对CSS选择器进行扩展；拥有便捷的插件扩展机制和丰富的插件。jQuery兼容各种主流浏览器，如IE 6.0+、FF 1.5+、Safari 2.0+、Opera 9.0+等。 jQuery的核心特性可以总结为：具有独特的链式语法和短小清晰的多功能接口；具有高效灵活的css选择器，并且可对CSS选择器进行扩展；拥有便捷的插件扩展机制和丰富的插件。jQuery兼容各种主流浏览器，如IE 6.0+、FF 1.5+、Safari 2.0+、Opera 9.0+等。\r\n<h4 id=\"2\">二-一发展历程</h4>\r\n2005年8月，John Resig提议改进Prototype的“Behaviour”库，于是他在blog上发表了自己的想法，并用了3个例子做简单的流程说明。 2005年8月，John Resig提议改进Prototype的“Behaviour”库，于是他在blog上发表了自己的想法，并用了3个例子做简单的流程说明。 2005年8月，John Resig提议改进Prototype的“Behaviour”库，于是他在blog上发表了自己的想法，并用了3个例子做简单的流程说明。 2005年8月，John Resig提议改进Prototype的“Behaviour”库，于是他在blog上发表了自己的想法，并用了3个例子做简单的流程说明。 2005年8月，John Resig提议改进Prototype的“Behaviour”库，于是他在blog上发表了自己的想法，并用了3个例子做简单的流程说明。 2005年8月，John Resig提议改进Prototype的“Behaviour”库，于是他在blog上发表了自己的想法，并用了3个例子做简单的流程说明。 2005年8月，John Resig提议改进Prototype的“Behaviour”库，于是他在blog上发表了自己的想法，并用了3个例子做简单的流程说明。 2005年8月，John Resig提议改进Prototype的“Behaviour”库，于是他在blog上发表了自己的想法，并用了3个例子做简单的流程说明。 2005年8月，John Resig提议改进Prototype的“Behaviour”库，于是他在blog上发表了自己的想法，并用了3个例子做简单的流程说明。 2005年8月，John Resig提议改进Prototype的“Behaviour”库，于是他在blog上发表了自己的想法，并用了3个例子做简单的流程说明。 2005年8月，John Resig提议改进Prototype的“Behaviour”库，于是他在blog上发表了自己的想法，并用了3个例子做简单的流程说明。 2005年8月，John Resig提议改进Prototype的“Behaviour”库，于是他在blog上发表了自己的想法，并用了3个例子做简单的流程说明。 2005年8月，John Resig提议改进Prototype的“Behaviour”库，于是他在blog上发表了自己的想法，并用了3个例子做简单的流程说明。 2005年8月，John Resig提议改进Prototype的“Behaviour”库，于是他在blog上发表了自己的想法，并用了3个例子做简单的流程说明。 2005年8月，John Resig提议改进Prototype的“Behaviour”库，于是他在blog上发表了自己的想法，并用了3个例子做简单的流程说明。 2005年8月，John Resig提议改进Prototype的“Behaviour”库，于是他在blog上发表了自己的想法，并用了3个例子做简单的流程说明。 2005年8月，John Resig提议改进Prototype的“Behaviour”库，于是他在blog上发表了自己的想法，并用了3个例子做简单的流程说明。\r\n<h3 id=\"3\">三 jQuery语法</h3>\r\n这些代码也是jQuery语法的最初雏形。当时John的想法很简单：他发现这种语法相对现有的JavaScript库更为简洁。但他没想到的是，这篇文章一经发布就引起了业界的关注。于是John开始认真思考着这件事情（编写语法更为简洁的JavaScript程序库），直到2006年1月14日，John正式宣布以jQuery的名称发布自己的程序库。随之而来的是jQuery的快速发展。这些代码也是jQuery语法的最初雏形。当时John的想法很简单：他发现这种语法相对现有的JavaScript库更为简洁。但他没想到的是，这篇文章一经发布就引起了业界的关注。于是John开始认真思考着这件事情（编写语法更为简洁的JavaScript程序库），直到2006年1月14日，John正式宣布以jQuery的名称发布自己的程序库。随之而来的是jQuery的快速发展。这些代码也是jQuery语法的最初雏形。当时John的想法很简单：他发现这种语法相对现有的JavaScript库更为简洁。但他没想到的是，这篇文章一经发布就引起了业界的关注。于是John开始认真思考着这件事情（编写语法更为简洁的JavaScript程序库），直到2006年1月14日，John正式宣布以jQuery的名称发布自己的程序库。随之而来的是jQuery的快速发展。这些代码也是jQuery语法的最初雏形。当时John的想法很简单：他发现这种语法相对现有的JavaScript库更为简洁。但他没想到的是，这篇文章一经发布就引起了业界的关注。于是John开始认真思考着这件事情（编写语法更为简洁的JavaScript程序库），直到2006年1月14日，John正式宣布以jQuery的名称发布自己的程序库。随之而来的是jQuery的快速发展。这些代码也是jQuery语法的最初雏形。当时John的想法很简单：他发现这种语法相对现有的JavaScript库更为简洁。但他没想到的是，这篇文章一经发布就引起了业界的关注。于是John开始认真思考着这件事情（编写语法更为简洁的JavaScript程序库），直到2006年1月14日，John正式宣布以jQuery的名称发布自己的程序库。随之而来的是jQuery的快速发展。这些代码也是jQuery语法的最初雏形。当时John的想法很简单：他发现这种语法相对现有的JavaScript库更为简洁。但他没想到的是，这篇文章一经发布就引起了业界的关注。于是John开始认真思考着这件事情（编写语法更为简洁的JavaScript程序库），直到2006年1月14日，John正式宣布以jQuery的名称发布自己的程序库。随之而来的是jQuery的快速发展。这些代码也是jQuery语法的最初雏形。当时John的想法很简单：他发现这种语法相对现有的JavaScript库更为简洁。但他没想到的是，这篇文章一经发布就引起了业界的关注。于是John开始认真思考着这件事情（编写语法更为简洁的JavaScript程序库），直到2006年1月14日，John正式宣布以jQuery的名称发布自己的程序库。随之而来的是jQuery的快速发展。这些代码也是jQuery语法的最初雏形。当时John的想法很简单：他发现这种语法相对现有的JavaScript库更为简洁。但他没想到的是，这篇文章一经发布就引起了业界的关注。于是John开始认真思考着这件事情（编写语法更为简洁的JavaScript程序库），直到2006年1月14日，John正式宣布以jQuery的名称发布自己的程序库。随之而来的是jQuery的快速发展。这些代码也是jQuery语法的最初雏形。当时John的想法很简单：他发现这种语法相对现有的JavaScript库更为简洁。但他没想到的是，这篇文章一经发布就引起了业界的关注。于是John开始认真思考着这件事情（编写语法更为简洁的JavaScript程序库），直到2006年1月14日，John正式宣布以jQuery的名称发布自己的程序库。随之而来的是jQuery的快速发展。这些代码也是jQuery语法的最初雏形。当时John的想法很简单：他发现这种语法相对现有的JavaScript库更为简洁。但他没想到的是，这篇文章一经发布就引起了业界的关注。于是John开始认真思考着这件事情（编写语法更为简洁的JavaScript程序库），直到2006年1月14日，John正式宣布以jQuery的名称发布自己的程序库。随之而来的是jQuery的快速发展。这些代码也是jQuery语法的最初雏形。当时John的想法很简单：他发现这种语法相对现有的JavaScript库更为简洁。但他没想到的是，这篇文章一经发布就引起了业界的关注。于是John开始认真思考着这件事情（编写语法更为简洁的JavaScript程序库），直到2006年1月14日，John正式宣布以jQuery的名称发布自己的程序库。随之而来的是jQuery的快速发展。这些代码也是jQuery语法的最初雏形。当时John的想法很简单：他发现这种语法相对现有的JavaScript库更为简洁。但他没想到的是，这篇文章一经发布就引起了业界的关注。于是John开始认真思考着这件事情（编写语法更为简洁的JavaScript程序库），直到2006年1月14日，John正式宣布以jQuery的名称发布自己的程序库。随之而来的是jQuery的快速发展。这些代码也是jQuery语法的最初雏形。当时John的想法很简单：他发现这种语法相对现有的JavaScript库更为简洁。但他没想到的是，这篇文章一经发布就引起了业界的关注。于是John开始认真思考着这件事情（编写语法更为简洁的JavaScript程序库），直到2006年1月14日，John正式宣布以jQuery的名称发布自己的程序库。随之而来的是jQuery的快速发展。这些代码也是jQuery语法的最初雏形。当时John的想法很简单：他发现这种语法相对现有的JavaScript库更为简洁。但他没想到的是，这篇文章一经发布就引起了业界的关注。于是John开始认真思考着这件事情（编写语法更为简洁的JavaScript程序库），直到2006年1月14日，John正式宣布以jQuery的名称发布自己的程序库。随之而来的是jQuery的快速发展。这些代码也是jQuery语法的最初雏形。当时John的想法很简单：他发现这种语法相对现有的JavaScript库更为简洁。但他没想到的是，这篇文章一经发布就引起了业界的关注。于是John开始认真思考着这件事情（编写语法更为简洁的JavaScript程序库），直到2006年1月14日，John正式宣布以jQuery的名称发布自己的程序库。随之而来的是jQuery的快速发展。这些代码也是jQuery语法的最初雏形。当时John的想法很简单：他发现这种语法相对现有的JavaScript库更为简洁。但他没想到的是，这篇文章一经发布就引起了业界的关注。于是John开始认真思考着这件事情（编写语法更为简洁的JavaScript程序库），直到2006年1月14日，John正式宣布以jQuery的名称发布自己的程序库。随之而来的是jQuery的快速发展。\r\n<h3 id=\"4\">jQuery 1.1.3版发布</h3>\r\n2007年7月，jQuery 1.1.3版发布，这次小版本的变化包含了对jQuery选择符引擎执行速度的显著提升。从这个版本开始，jQuery的性能达到了Prototype、Mootools以及Dojo等同类JavaScript库的水平。同年9月，jQuery 1.2版发布，它去掉了对XPath选择符的支持，原因是相对于CSS语法它已经变得多余了。这一版能够对效果进行更为灵活的定制，而且借助新增的命名空间事件，也使插件开发变得更容易。同时，jQuery UI项目也开始启动，这个新的套件是作为曾经流行但已过时的Interface插件的替代项目而发布的。jQuery UI中包含大2007年7月，jQuery 1.1.3版发布，这次小版本的变化包含了对jQuery选择符引擎执行速度的显著提升。从这个版本开始，jQuery的性能达到了Prototype、Mootools以及Dojo等同类JavaScript库的水平。同年9月，jQuery 1.2版发布，它去掉了对XPath选择符的支持，原因是相对于CSS语法它已经变得多余了。这一版能够对效果进行更为灵活的定制，而且借助新增的命名空间事件，也使插件开发变得更容易。同时，jQuery UI项目也开始启动，这个新的套件是作为曾经流行但已过时的Interface插件的替代项目而发布的。jQuery UI中包含大量预定义好的部件（widget）2007年7月，jQuery 1.1.3版发布，这次小版本的变化包含了对jQuery选择符引擎执行速度的显著提升。从这个版本开始，jQuery的性能达到了Prototype、Mootools以及Dojo等同类JavaScript库的水平。同年9月，jQuery 1.2版发布，它去掉了对XPath选择符的支持，原因是相对于CSS语法它已经变得多余了。这一版能够对效果进行更为灵活的定制，而且借助新增的命名空间事件，也使插件开发变得更容易。同时，jQuery UI项目也开始启动，这个新的套件是作为曾经流行但已过时的Interface插件的替代项目而发布的。jQuery UI中包含大量预定义好的部件（widget）2007年7月，jQuery 1.1.3版发布，这次小版本的变化包含了对jQuery选择符引擎执行速度的显著提升。从这个版本开始，jQuery的性能达到了Prototype、Mootools以及Dojo等同类JavaScript库的水平。同年9月，jQuery 1.2版发布，它去掉了对XPath选择符的支持，原因是相对于CSS语法它已经变得多余了。这一版能够对效果进行更为灵活的定制，而且借助新增的命名空间事件，也使插件开发变得更容易。同时，jQuery UI项目也开始启动，这个新的套件是作为曾经流行但已过时的Interface插件的替代项目而发布的。jQuery UI中包含大量预定义好的部件（widget）2007年7月，jQuery 1.1.3版发布，这次小版本的变化包含了对jQuery选择符引擎执行速度的显著提升。从这个版本开始，jQuery的性能达到了Prototype、Mootools以及Dojo等同类JavaScript库的水平。同年9月，jQuery 1.2版发布，它去掉了对XPath选择符的支持，原因是相对于CSS语法它已经变得多余了。这一版能够对效果进行更为灵活的定制，而且借助新增的命名空间事件，也使插件开发变得更容易。同时，jQuery UI项目也开始启动，这个新的套件是作为曾经流行但已过时的Interface插件的替代项目而发布的。jQuery UI中包含大量预定义好的部件（widget）2007年7月，jQuery 1.1.3版发布，这次小版本的变化包含了对jQuery选择符引擎执行速度的显著提升。从这个版本开始，jQuery的性能达到了Prototype、Mootools以及Dojo等同类JavaScript库的水平。同年9月，jQuery 1.2版发布，它去掉了对XPath选择符的支持，原因是相对于CSS语法它已经变得多余了。这一版能够对效果进行更为灵活的定制，而且借助新增的命名空间事件，也使插件开发变得更容易。同时，jQuery UI项目也开始启动，这个新的套件是作为曾经流行但已过时的Interface插件的替代项目而发布的。jQuery UI中包含大量预定义好的部件（widget）2007年7月，jQuery 1.1.3版发布，这次小版本的变化包含了对jQuery选择符引擎执行速度的显著提升。从这个版本开始，jQuery的性能达到了Prototype、Mootools以及Dojo等同类JavaScript库的水平。同年9月，jQuery 1.2版发布，它去掉了对XPath选择符的支持，原因是相对于CSS语法它已经变得多余了。这一版能够对效果进行更为灵活的定制，而且借助新增的命名空间事件，也使插件开发变得更容易。同时，jQuery UI项目也开始启动，这个新的套件是作为曾经流行但已过时的Interface插件的替代项目而发布的。jQuery UI中包含大量预定义好的部件（widget）2007年7月，jQuery 1.1.3版发布，这次小版本的变化包含了对jQuery选择符引擎执行速度的显著提升。从这个版本开始，jQuery的性能达到了Prototype、Mootools以及Dojo等同类JavaScript库的水平。同年9月，jQuery 1.2版发布，它去掉了对XPath选择符的支持，原因是相对于CSS语法它已经变得多余了。这一版能够对效果进行更为灵活的定制，而且借助新增的命名空间事件，也使插件开发变得更容易。同时，jQuery UI项目也开始启动，这个新的套件是作为曾经流行但已过时的Interface插件的替代项目而发布的。jQuery UI中包含大量预定义好的部件（widget）2007年7月，jQuery 1.1.3版发布，这次小版本的变化包含了对jQuery选择符引擎执行速度的显著提升。从这个版本开始，jQuery的性能达到了Prototype、Mootools以及Dojo等同类JavaScript库的水平。同年9月，jQuery 1.2版发布，它去掉了对XPath选择符的支持，原因是相对于CSS语法它已经变得多余了。这一版能够对效果进行更为灵活的定制，而且借助新增的命名空间事件，也使插件开发变得更容易。同时，jQuery UI项目也开始启动，这个新的套件是作为曾经流行但已过时的Interface插件的替代项目而发布的。jQuery UI中包含大量预定义好的部件（widget）2007年7月，jQuery 1.1.3版发布，这次小版本的变化包含了对jQuery选择符引擎执行速度的显著提升。从这个版本开始，jQuery的性能达到了Prototype、Mootools以及Dojo等同类JavaScript库的水平。同年9月，jQuery 1.2版发布，它去掉了对XPath选择符的支持，原因是相对于CSS语法它已经变得多余了。这一版能够对效果进行更为灵活的定制，而且借助新增的命名空间事件，也使插件开发变得更容易。同时，jQuery UI项目也开始启动，这个新的套件是作为曾经流行但已过时的Interface插件的替代项目而发布的。jQuery UI中包含大量预定义好的部件（widget）2007年7月，jQuery 1.1.3版发布，这次小版本的变化包含了对jQuery选择符引擎执行速度的显著提升。从这个版本开始，jQuery的性能达到了Prototype、Mootools以及Dojo等同类JavaScript库的水平。同年9月，jQuery 1.2版发布，它去掉了对XPath选择符的支持，原因是相对于CSS语法它已经变得多余了。这一版能够对效果进行更为灵活的定制，而且借助新增的命名空间事件，也使插件开发变得更容易。同时，jQuery UI项目也开始启动，这个新的套件是作为曾经流行但已过时的Interface插件的替代项目而发布的。jQuery UI中包含大量预定义好的部件（widget）量预定义好的部件（widget），以及一组用于构建高级元素（例如可拖放、拖拽、排序）的工具。\r\n<h3 id=\"5\">简洁的JavaScript框架</h3>\r\njQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互\r\n<h3 id=\"6\">简洁的JavaScript框架</h3>\r\njQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互\r\n<h3 id=\"7\">简洁的JavaScript框架</h3>\r\njQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互\r\n<h3 id=\"8\">简洁的JavaScript框架</h3>\r\njQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互\r\n<h3 id=\"9\">简洁的JavaScript框架</h3>\r\njQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互\r\n', 1584260505, 1);
INSERT INTO `artical` VALUES (3, 'test', 'ff', 3, '1111', 1584260505, 1);

-- ----------------------------
-- Table structure for artical_tags
-- ----------------------------
DROP TABLE IF EXISTS `artical_tags`;
CREATE TABLE `artical_tags`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `artical_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of artical_tags
-- ----------------------------
INSERT INTO `artical_tags` VALUES (1, 1, 1);
INSERT INTO `artical_tags` VALUES (2, 1, 2);
INSERT INTO `artical_tags` VALUES (3, 4, 1);

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `icon` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `parent_id` int(11) NOT NULL DEFAULT 0,
  `path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `create_time` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 22 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES (2, '仪表盘', 'dashboard', 1, '/admin/dashboard', 2313);
INSERT INTO `menu` VALUES (3, '组件', 'desktop', 1, '/admin/component', 312);
INSERT INTO `menu` VALUES (4, '工具条', '', 2, '/admin/toolbar', 2313);
INSERT INTO `menu` VALUES (5, '文章管理 ', '', 3, '/admin/artical', 0);
INSERT INTO `menu` VALUES (6, '表格管理', '', 3, '/admin/datatable', 0);

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `parent_id` int(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (1, '超级', NULL);

-- ----------------------------
-- Table structure for role_menus
-- ----------------------------
DROP TABLE IF EXISTS `role_menus`;
CREATE TABLE `role_menus`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of role_menus
-- ----------------------------
INSERT INTO `role_menus` VALUES (1, 1, 2);
INSERT INTO `role_menus` VALUES (2, 1, 3);
INSERT INTO `role_menus` VALUES (3, 1, 4);
INSERT INTO `role_menus` VALUES (4, 1, 5);
INSERT INTO `role_menus` VALUES (5, 1, 6);

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `id` int(50) NOT NULL,
  `rid` int(20) NULL DEFAULT NULL COMMENT '权限id',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (1, 111, '超级管理员');
INSERT INTO `roles` VALUES (2, 222, '管理员');
INSERT INTO `roles` VALUES (3, 333, '游客');

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tag
-- ----------------------------
INSERT INTO `tag` VALUES (1, 'target');
INSERT INTO `tag` VALUES (2, 'f');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `salf` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '加密字符串',
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `gender` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `age` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `role` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', 'AD1F', 'admin', 'fsdf', 'fsd', 'fds', 'fads', 1);

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role`  (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NULL DEFAULT NULL,
  `role` int(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of user_role
-- ----------------------------
INSERT INTO `user_role` VALUES (1, 1, 1);

SET FOREIGN_KEY_CHECKS = 1;
