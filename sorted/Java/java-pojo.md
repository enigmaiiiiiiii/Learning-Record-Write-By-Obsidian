# Java - pojo

## What is pojo?

- Plain Prdinary Java Object

## Pojo In Project

- Pojo Use to represent specific fields in the project, usually used in query return values
- Pojo class corresponds to the query fields of the entity class, that is to say:
  - Entity class corresponds to a table in the database
  - An entity can correspond to multiple Pojo classes
  - A Pojo class is composed of a collection of some attributes of the entity class
- Pojo class naming: entity class name + DO/DTO/VO
  - VO: View Object, ~~server$\rightarrow$client~~
  - DTO: Data Transfer Object, ~~client$\rightarrow$server~~
  - DO: Data Object, used for data access

> when using DTO to transfer data, need to copy the properties of DTO to the corresponding entity class, BeanUtils tool class provides simplified implementation

## Code Specification

- all fields are private
- provide getter and setter methods
  - getter method start with `get`
  - setter method start with `set`
  - use camel case
- override equals() and hashCode() method
- must implement [Serializable interface]
- recommend override toString()

## Design Entity Class According To Database Type

| MySQL Type             | Java Type     |
| ---------------------- | ------------- |
| tinyint, smallint, int | Integer       |
| bigint                 | long          |
| char/varchar/text      | String        |
| datetime               | LocalDateTime |
| decimal                | BigDecimal    |

why id use Long type in java and bigint in MySQL, not int?

- cause int available value($-2147483648~2147483647$) may be not enough in some case
- bigint type available value($-9223372036854775808~9223372036854775807$)

## Framework

- In SpringBoot, use [Lombok](lombok.md) framework to auto generate java class properties
