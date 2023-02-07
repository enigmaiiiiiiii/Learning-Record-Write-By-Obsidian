# 分页显示

由于需要用到[Mybatis的分页插件](mybatis-pagehelper.md)，在返回分页信息的业务中需要用到PageHelper的类，需要返回`PageInfo<T>`，需要导入**package**

为了避免在每个分类业务中导入PageHelper package, 所以将PageInfo<T>类仅在`com.example.project_name.common`模块中导入, 一般定义在`com.example.project_name.common.restful`目录中

因为Json数据类型便于传输，所以将`PageInfo<T>`类转换为`JsonPage<T>`, 所以在common中定义`JsonPage<T>`类, 在[业务实现类中](springboot-project-workflow-service.md#实现类)导入`com.example.project_name.JsonPage`

## 定义JsonPage

- JsonPage类包含[PageInfo类](../mybatis-pagehelper.md#pageinfo类)的属性

```java
@Data
public class JsonPage<T> implements Serializable {

    @ApiModelProperty(value = "总页数",name="totalPages")
    private Integer totalPages;
    @ApiModelProperty(value = "总条数",name="totalCount")
    private Long totalCount;
    @ApiModelProperty(value = "页码",name="page")
    private Integer page;
    @ApiModelProperty(value = "每页条数",name="pageSize")
    private Integer pageSize;

    // JsonPage还要包含分页查询结果
    @ApiModelProperty(value = "分页数据",name="list")
    private List<T> list;

    // 将PageInfo转换为JsonPage
    public static <T> JsonPage<T> restPage(PageInfo<T> pageInfo){
        // 所谓转换的意思就是将pageInfo对象中的信息,赋值给JsonPage类型
        JsonPage<T> result=new JsonPage<>();
        // 因为PageInfo和JsonPage同名属性较少,所以手动赋值
        result.setTotalCount(pageInfo.getTotal());
        result.setTotalPages(pageInfo.getPages());
        result.setPage(pageInfo.getPageNum());
        result.setPageSize(pageInfo.getPageSize());
        // 别忘了最后的分页数据
        result.setList(pageInfo.getList());
        // 最后返回JsonPage类型对象result
        return  result;
    }
}
```