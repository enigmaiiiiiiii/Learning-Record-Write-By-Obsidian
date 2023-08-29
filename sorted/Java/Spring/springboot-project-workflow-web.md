# SpringBoot Workflow - web Directory

- define response status and content
- include classes
  - `ServiceCode.java`: [Enum type](java-enum-type.md) to define status code
  - `JsonResult.java`: use to wrap response data

## JsonResult Class

property

- `state`: [status code](http-response-message.md#status-line)
- `message`: [reponse message](http-response-message.md#status-line)
- `data`: reponse data

```java
public class JsonResult<T> implements Serializable {

    private Integer state;
    private String message;
    private T data;

    public static JsonResult<Void> ok() {
        return ok(null);
    }

    public static <T> JsonResult<T> ok(Object data) {
        JsonResult jsonResult = new JsonResult();
        jsonResult.state = ServiceCode.OK.getValue();
        jsonResult.message = null;
        jsonResult.data = data;
        return jsonResult;
    }

    public static JsonResult<Void> fail(ServiceException e) {
        return fail(e.getServiceCode(), e.getMessage());
    }
    public static JsonResult<Void> fail(ServiceCode serviceCode, String message) {
        JsonResult<Void> jsonResult = new JsonResult<>();
        jsonResult.state = serviceCode.getValue();
        jsonResult.message = message;
        return jsonResult;
    }
}
```

## SericeCode类

业务状态码类

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
