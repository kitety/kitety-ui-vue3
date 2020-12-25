import { ComponentPropsOptions, ExtractPropTypes } from "vue";

const props = {
  name: { type: String },
  age: { type: Number, default: 10 },
  flag: { type: Boolean, required: true }
}

type PropsType = ExtractPropTypes<typeof props>
/**
 * const myProps: {
    age: number;
    flag: boolean;
} & {
    name?: string | undefined;
}
 */
const myProps: PropsType = {} as any

export function defineComponent<
  PropsOptions extends Readonly<ComponentPropsOptions>, Props extends Readonly<ExtractPropTypes<PropsOptions>>>(options: {}) {

}
