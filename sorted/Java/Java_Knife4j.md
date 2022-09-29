# Knife4j

## 使用

- 最后使用访问`http://localhost:<serverport>/doc.html#/home`

添加依赖

```xml
<dependency>
    <groupId>com.github.xiaoymin</groupId>
    <artifactId>knife4j-spring-boot-stater</artifactId>
    <version>2.0.9</version>
</dependency>
```

添加配置文件knife4j项

```yaml
knife4j
  enable: true
```

添加配置类

- 在config包下创建SwaggerConfig类

```java
package packagename.of.config;

import com.github.xiaoymin.knife4j.spring.extension.OpenApiExtensionResolver;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2WebMvc;

/**
 * Knife4j配置类
 *
 * @author somebody
 * @version 0.0.1
 */
@Slf4j
@Configuration
@EnableSwagger2WebMvc
public class Knife4jConfiguration {

    /**
     * 指定Controller包路径
     */
    private String basePackage = "package.of.your.controller";
    /**
     * 分组名称
     */
    private String groupName = "passport";
    /**
     * 主机名
     */
    private String host = "主机名";
    /**
     * 标题
     */
    private String title = "标题";
    /**
     * 简介
     */
    private String description = "简介";
    /**
     * 服务条款URL
     */
    private String termsOfServiceUrl = "http://www.apache.org/licenses/LICENSE-2.0";
    /**
     * 联系人
     */
    private String contactName = "联系人";
    /**
     * 联系网址
     */
    private String contactUrl = "联系地址";
    /**
     * 联系邮箱
     */
    private String contactEmail = "联系邮箱";
    /**
     * 版本号
     */
    private String version = "1.0.0";

    @Autowired
    private OpenApiExtensionResolver openApiExtensionResolver;

    public Knife4jConfiguration() {
        log.debug("加载配置类：Knife4jConfiguration");
    }

    @Bean
    public Docket docket() {
        String groupName = "1.0.0";
        Docket docket = new Docket(DocumentationType.SWAGGER_2)
                .host(host)
                .apiInfo(apiInfo())
                .groupName(groupName)
                .select()
                .apis(RequestHandlerSelectors.basePackage(basePackage))
                .paths(PathSelectors.any())
                .build()
                .extensions(openApiExtensionResolver.buildExtensions(groupName));
        return docket;
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title(title)
                .description(description)
                .termsOfServiceUrl(termsOfServiceUrl)
                .contact(new Contact(contactName, contactUrl, contactEmail))
                .version(version)
                .build();
    }
}
```

## 设置

- `@Api(tags="name")`: 设置标签名, 注解class
- `@ApiOperation(value="name")`:设置接口名和简介, 注解方法
- `@ApiOperationSupport(order=100)`: 设置接口排序, 按照数字从小到大排序, 注解方法


## 显示

- 对象格式参数会显示对象各个属性参数输入框, 便于调试
- `@RequestBody`参数则提供json格式输入框
