# web

- 定义响应状态和内容
- 包含的类
  - ServiceCode.java: 枚举类
  - JsonResult.java: 用来定义响应结果对象

## JsonResult类

- 属性 
 - state: 状态码
 - message: 响应信息
 - data: 响应数据
 
```java
public class JsonResult<T> implements Serializable {

    private Integer state;
    private String message;
    private T data;

    public static JsonResult ok() {
        return ok(null);
    }

    public static JsonResult ok(Object data) {
        JsonResult jsonResult = new JsonResult();
        jsonResult.state = ServiceCode.OK.getValue();
        jsonResult.message = null;
        jsonResult.data = data;
        return jsonResult;
    }

    public static JsonResult fail(ServiceException e) {
        return fail(e.getServiceCode(), e.getMessage());
    }
    public static JsonResult fail(ServiceCode serviceCode, String message) {
        JsonResult jsonResult = new JsonResult();
        jsonResult.state = serviceCode.getValue();
        jsonResult.message = message;
        return jsonResult;
    }
}
```

## SericeCode类

```java
public enum ServiceCode {
    OK(200),
    ERR(400);

    private Integer code;

    ServiceCode(Integer code) {
        this.code = code;
    }

    public Integer getCode() {
        return value;
    }
}
```
