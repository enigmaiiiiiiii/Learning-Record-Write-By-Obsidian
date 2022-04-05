# 类

## [GameObject](Unity_class_GameObject.md)

- Unity中所有[游戏对象](Unity_Develop_Factor.md))的基类
- 有属性, 方法，静态方法

## Input

- 获取输入

## Editor

- 方法
  - OnSceneGUI: 编辑Scene窗口对象
  - OnEnable
  - OnInspectorGUI

## Gizmos

- 画笔工具，通过**静态方法**完成绘制工作
- 用于辅助显示
- 需要在方法OnDrawGizmos()和OnDrawGizmosSelected()中完成
  - 每帧调用
- OnDrawGizmos(): 每帧调用，
  - 调用时间: Unity编辑器Scene界面加载之后
  - 每帧调用

## Handles

- 辅助显示
- 比Gizmos有更多功能，可以通过handles来编辑Scene中物体

## TextAsset

- 在UnityEngine命名空间，继承自Object
- 通过TextAsset类获取文本文件的原始内容。
- 访问二进制文件中的数据，可以将该文件作为原始字节数组访问

## Eidtor

- 属性
  - target: 当前查看的object
