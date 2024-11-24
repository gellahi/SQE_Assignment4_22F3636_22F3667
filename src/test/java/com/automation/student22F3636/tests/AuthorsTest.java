package com.automation.student22F3636.tests;

import com.automation.config.ApiConfig;
import io.restassured.http.ContentType;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class AuthorsTest {
    private final String BASE_URL = ApiConfig.BASE_URL;

    @Test
    public void testGetAllAuthors() {
        given()
                .contentType(ContentType.JSON)
                .when()
                .get(BASE_URL + "/Authors")
                .then()
                .statusCode(200)
                .body("size()", greaterThan(0));
    }

    @Test
    public void testCreateAuthor() {
        String requestBody = """
            {
              "id": 0,
              "idBook": 1,
              "firstName": "John",
              "lastName": "Doe"
            }
            """;

        given()
                .contentType(ContentType.JSON)
                .body(requestBody)
                .when()
                .post(BASE_URL + "/Authors")
                .then()
                .statusCode(200)
                .body("firstName", equalTo("John"))
                .body("lastName", equalTo("Doe"));
    }

    @Test
    public void testUpdateAuthor() {
        String requestBody = """
            {
              "id": 1,
              "idBook": 1,
              "firstName": "Jane",
              "lastName": "Smith"
            }
            """;

        given()
                .contentType(ContentType.JSON)
                .body(requestBody)
                .when()
                .put(BASE_URL + "/Authors/1")
                .then()
                .statusCode(200)
                .body("firstName", equalTo("Jane"));
    }

    @Test
    public void testDeleteAuthor() {
        when()
                .delete(BASE_URL + "/Authors/1")
                .then()
                .statusCode(200);
    }
}