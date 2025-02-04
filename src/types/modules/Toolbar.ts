export type ToolbarTab = {
  id: string;
  title: string;
  icon?: string;
}

export type ToolbarTool = {
  id: string;
  title: string;
}

export type ToolbarTools = {
  [key: string]: ToolbarTool;
}

export type ToolbarTabTools = ToolbarTab &{
  tools: string[];
}

export type Toolbar = {
  tabs: ToolbarTabTools[];
}