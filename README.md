# Svelte Dropbox Chooser

Simple Svelte wrapper for [Dropbox Chooser API](https://www.dropbox.com/developers/chooser)

## Installation

```sh
npm install svelte-dropbox-chooser
```

## Example

```svelte
<DropboxChooser
  appKey="your-app-key"
  opts={{
    success: files => {
      alert("Here's the file link: " + files[0].link);
    },
    cancel: () => {},
    linkType: 'preview',
    multiselect: false,
    extensions: ['.pdf', '.doc', '.docx'],
    folderselect: false,
    sizeLimit: 1024
  }}
/>
```

## Retrieve App Key

Your `app key` can be found in [Dropbox - Developers](https://www.dropbox.com/developers/apps/).  
To get started with creating new Dropbox app you can read [Getting Started - Developers](https://www.dropbox.com/developers/reference/getting-started#app%20console).

# API

You can read more about the API at [Dropbox Chooser API](https://www.dropbox.com/developers/chooser)

## Options

The `<DropboxChooser />` component takes options parameter with the following fields:

```ts
{
  success: (files: File[]) => void, // Required. Called when a user selects an item in the Chooser.
  cancel: () => void,               // Optional. Called when the user closes the dialog without selecting a file
  linkType: "preview",              // Optional. "preview" (default) is a preview link to the document for sharing, "direct" is an expiring link to download the contents of the file.
  multiselect: false,               // Optional. Enables multiple file selection.
  extensions: ['.pdf'],             // Optional. A list of allowed file extensions.
  folderselect: false,              // Optional. Allows the user to select both folders and files.
  sizeLimit: 1024,                  // Optional. A limit on the size of each file that may be selected, in bytes.
};
```

## File

The `files` parameter in the above `success` callback function will be an array of file objects, each containing info about the selected file. If multiselect is false, the array will contain a single item.

Each `file` object includes the following fields:

```ts
{
  id: "id:...",                 // Unique ID for the file, compatible with Dropbox API v2.
  name: "filename.txt",         // Name of the file.
  link: "https://...",          // URL of the file, which varies depending on the linkType specified.
  bytes: 464,                   // Size of the file in bytes.
  icon: "https://...",          // URL to a 64x64px icon for the file based on the file's extension.
  thumbnailLink: "https://...", // A thumbnail URL generated when the user selects images and videos.
  isDir: false,                 // Whether or not the file is actually a directory
};
```
