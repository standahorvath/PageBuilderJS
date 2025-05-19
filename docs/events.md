# Events

PageBuilderJS emits various DOM events (via `CustomEvent`) when important user actions occur inside the editor. This allows you to hook into the builder's internal actions and trigger external logic in your application.

## 📡 Available Events

| Event name          | Description                                               | Payload (`event.detail`) |
| ------------------- | --------------------------------------------------------- | ------------------------ |
| `onModalSave`       | Fired when a module instance is saved from the edit modal | [`InstanceModule`](https://github.com/standahorvath/PageBuilderJS/blob/main/src/types/modules/Content.ts)         |
| `onUpdate`          | Fired when the content structure changes                  | [`InstanceModule[]`](https://github.com/standahorvath/PageBuilderJS/blob/main/src/types/modules/Content.ts)       |
| `onTemplateCreate`  | A new template is saved                                   | [`Template`](https://github.com/standahorvath/PageBuilderJS/blob/main/src/types/modules/Template.ts)               |
| `onTemplateDelete`  | A template was deleted                                    | `template name: string`  |
| `onTemplatesUpdate` | The list of templates has changed                         | [`Template[]`](https://github.com/standahorvath/PageBuilderJS/blob/main/src/types/modules/Template.ts)             |
| `onTemplateAppend`  | A template was appended into the canvas                   | `template name: string`  |

---

## 🧪 Example Usage

### Using JavaScript:

```html
<script>
  const builder = document.createElement('block-builder')
  const content = [/* ... */]
  const modules = [/* ... */]
  const toolbar = {/* ... */}

  // Assign data
  builder.modules = modules
  builder.toolbar = toolbar
  builder.content = content

  // Listen to any changes in content structure
  builder.addEventListener('onUpdate', (event) => {
    console.log('Blocks content changed:', event.detail)
  })

  document.body.appendChild(builder)
</script>
```
