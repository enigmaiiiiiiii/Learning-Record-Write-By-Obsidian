# pom.xml

- Project Object Model

元素

- project: Maven项目的顶级元素
- modelVersion
- groupId
- artifactId
- version
- name
- url
- properties
- dependencies: dependency元素列表是该元素的子元素
- build

## dependencies元素

指定dependency的版本

- soft
  - `<version>1.0</version>`: 依赖关系树中没有其他版本，则使用1.0版本
- hard
  - `<version>[1.0]</version>`: Use 1.0 and Only 1.0
  - `<version>(,1.0]</version>`: <=1.0
  - `<version>[1.2, 1.3]</version>`: between 1.2 and 1.3
  - `<version>(,1.0], [1.2,)</version>`: <=1.0 or >=1.2

Exclusion元素

- 不要包含的传递依赖项

## version

- snapshot: 表示代码为最新开发分支版本, 不保证stable和unchanging 