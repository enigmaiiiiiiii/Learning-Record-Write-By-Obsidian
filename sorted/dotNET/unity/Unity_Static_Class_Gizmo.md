# Gizmos

- 画笔工具，通过**静态方法**完成绘制工作
- 用于辅助显示
- 需要在方法OnDrawGizmos()和OnDrawGizmosSelected()中完成
  - 每帧调用
- OnDrawGizmos(): 每帧调用，
  - 调用时间: Unity编辑器Scene界面加载之后
  - 每帧调用