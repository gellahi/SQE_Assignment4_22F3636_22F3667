package com.automation.student22F3667.tests;

import com.automation.config.ApiConfig;
import io.restassured.http.ContentType;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class CoverPhotosTest {
    private final String BASE_URL = ApiConfig.BASE_URL;
    @Test
    public void testGetAllCoverPhotos() {
        given()
                .contentType(ContentType.JSON)
                .when()
                .get(BASE_URL + "/CoverPhotos")
                .then()
                .statusCode(200)
                .body("size()", greaterThan(0));
    }

    @Test
    public void testCreateCoverPhoto() {
        String requestBody = """
            {
              "id": 0,
              "idBook": 1,
              "url": "https://example.com/cover.jpg"
            }
            """;

        given()
                .contentType(ContentType.JSON)
                .body(requestBody)
                .when()
                .post(BASE_URL + "/CoverPhotos")
                .then()
                .statusCode(200)
                .body("url", equalTo("https://example.com/cover.jpg"))
                .body("idBook", equalTo(1));
    }

    @Test
    public void testUpdateCoverPhoto() {
        String requestBody = """
            {
              "id": 1,
              "idBook": 2,
              "url": "https://example.com/updated-cover.jpg"
            }
            """;

        given()
                .contentType(ContentType.JSON)
                .body(requestBody)
                .when()
                .put(BASE_URL + "/CoverPhotos/1")
                .then()
                .statusCode(200)
                .body("url", equalTo("https://example.com/updated-cover.jpg"))
                .body("idBook", equalTo(2));
    }

    @Test
    public void testDeleteCoverPhoto() {
        when()
                .delete(BASE_URL + "/CoverPhotos/1")
                .then()
                .statusCode(200);
    }
}