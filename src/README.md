## Goals

Align on a field model as a method for schema building
Figure out the interplay of fields and schema

## Notes / Questions

What are fields?
Visual representation of the data associated with an entity. This visual representation is tabular in nature, mapping the graph schema to a tabular one. Eg. grouping connections.

Should fields be leveraged in patterns? Part of the separation of fields and schemas are that they're used differently in pattern creation and forms. The grouping of paths is geared toward the tabular format of the data.

Fields can represent the same data

- eg. editting the properties of existing connections in a form.

Do we need to show schema?

- Properties
  - 1-1 with fields, all information can be displayed in the fields
- Connections
  - Visible in the network

Will unmapped schema be a thing in an active city?

- Properties should all have some representation upon creation
- Connections
  - Unclear if a connection should be joined with others automatically
  - Wildcard in queries

Data Levels (low to high)

- data type - required, unique
- field - inputType, field settings
- field instance / form - required, order

Form Builder

- show usage of fields specified on the type
- creation of new fields
  - should this be shown at the type level even if it's a duplicateed data source?
- settings a behaviors of a field

## TODO

Connection Type Detail Panel

Schema

Shared fields
[] Expose a better method of using existing fields (autocomplete on name?)
[] Global Properties? Do we want to enforce consistent propertiy data types?
[] Remove a field (prompt user to remove the schema/data?)
[] When to use auto generated fields?

UI / Interactions
[√] Add unmapped schema as a field
[√] Expose interface types in field modal
[√] Field tags: hidden, interface type, required, label, etc
[√] Field actions: set as label, hide, edit, etc.
[] Connection Type screen to show connection constraints

- graph/pattern
- fields
- data
- import
- integrations

Interactions

- Layout - Smooth transitions
- Edge Rendering when not left to right
- Select Node
  - Highlight neighbors, fade others
  - run radial layout from this node
  - Pan to, including neighbors in bbox
- Select Edge
  - Show all instances
- Expose edge label Renderer, like node
- Data drive node sizes by number of entities

Form Builder
Actions
Computed Properties / Styles
Data Import / Integrations
Metrics
