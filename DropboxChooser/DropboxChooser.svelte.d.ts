import { SvelteComponentTyped } from "svelte";
import type { Options } from './types';
declare const __propDef: {
    props: {
        appKey: string;
        options: Options;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DropboxChooserProps = typeof __propDef.props;
export type DropboxChooserEvents = typeof __propDef.events;
export type DropboxChooserSlots = typeof __propDef.slots;
export default class DropboxChooser extends SvelteComponentTyped<DropboxChooserProps, DropboxChooserEvents, DropboxChooserSlots> {
}
export {};
