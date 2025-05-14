import { IconName } from "@/BlockBuilder/Utils/IconsMap";

export type ToolbarTab = {
  id: string;
  title: string;
  icon?: string;
}

export type ToolbarTool = {
  id: string;
  title: string;
  icon?: string | IconName;
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