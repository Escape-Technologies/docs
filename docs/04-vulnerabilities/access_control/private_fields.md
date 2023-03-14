---
sidebar_position: 19
title: Private fields
---

# Private fields

## Description

According to the rules provided in the configuration file, `objects` and `object fields` can be accessed by unauthorized users.

## Remediation

When accessing the application through GraphQL, it is important to validate whether or not the user is given access to the requested elements from the schema.
Access control policies must therefore be implemented **on every path** of the Graph leading to the given field or object.

The authorization logic belongs to the business logic layer, and from there it is accessed by GraphQL.
This way, the application can have a single source of truth for authorization, which can then be used for other access points.

Among the several access control policies that can be implemented in an application, the two most popular ones are **Role-Based Access Control** (RBAC) and **Attribute-Based Access Control** (ABAC).
  - With **Role-Based Access Control**, permissions are granted based on roles which are later assigned to the users. For instance, WordPress has an `administrator` role with access to all resources, and the `editor`, `author`, `contributor`, and `subscriber` roles which each restrict permissions in various degrees, such as being able to create and publish a blog post, just create it, or simply read it.
  - With **Attribute-Based Access Control**, permissions are granted based on metadata that can be assigned to different entities including users, assets, or environment conditions (the time of the day or the visitor's IP address for example). In the WordPress example, the capability `edit_others_posts` is used to validate whether or not the user can edit other users' posts.

For most use cases, ABAC is preferable to RBAC as it allows for finely tuned permissions with explicit goals.


<details>
    <summary>Apollo</summary>

See [Apollo's Access Control documentation](https://www.apollographql.com/docs/apollo-server/security/authentication/#in-resolvers).
For large scale applications, you'll want to use a specific package like [GraphQL Shield](https://github.com/maticzav/graphql-shield) for quick and easy Access Control management.


</details>

<details>
    <summary>Awsappsync</summary>

Appsync provides several methods for protecting critical information.
-To learn how to implement fine-grained access control, head over to https://docs.aws.amazon.com/appsync/latest/devguide/security-authz.html#fine-grained-access-control.


</details>

<details>
    <summary>Hasura</summary>

See Hasura's detailed [documentation for Authorization Management](https://hasura.io/docs/latest/graphql/core/auth/authorization/permission-rules/).


</details>

## Configuration

> CheckId: `access_control/private_fields`

### Options

- *empty_values_are_positive* : When the API returns a None value without error is the field considered to be successfully accessed ?


### Parameters


**user** : An object `{objectName:[filedName]}` represting object fields that the user is not supposed to have access to.

```json
{'__user': {'**value**': ['**value**']}}
```




### Examples


#### Ignoring this check

```json
{
    "checks": {
        "Private fields": {
            "skip": true
        }
    }
}
```


#### Accessiblity of private objects in a GraphQL API for not authenticated users.

```
{
  "auth": {
    "public": {                      #   
      "tech": "public"               # Default value on a new application 
    },                               #
    ... REDACTED AUTH ...
  },
  "users": {                         
    "public": {                      #
      "auth": "public"               # Default value on a new application 
    },                               #
    "exampleUser": {
      ... REDACTED AUTH ...
    }
  }
  ... Other configuration settings ...

  "checks": {

    ... Other checks ...

    "access_control/private_fields": {
      "public": {                    <--- Triggering on a "users" object key
        "Query": [                   <--- Object name
          "getUsersById",            <--- Field name
          "getAllUsers"              # Here, the public user is not supposed to 
                                     #  have access to the "getUsersById" and "getAllUsers" queries.
        ],
        "Mutation": [
          ...
        ],
        "User": [                    <--- Object name
          "id"                       # Here, the public user is not supposed to
                                     #  have access to the "id" field of the "User" object
        ]
      }
    }

    ... Other checks ...
  }

  ... Other configuration settings ...
}
```





## Score

- Escape Severity: **<span className="high-severity">HIGH</span>**
- OWASP: **[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)**
- PCI DSS: **6.5.8**
- CWE
  - **200**
  - **201**
  - **284**
  - **668**
  - **1198**
  - **1212**
  - **1220**
- WASC: **22**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N/E:H/RL:O/RC:C**
- CVSS_SCORE: **5.1**

## References

https://blog.logrocket.com/authorization-access-control-graphql/
