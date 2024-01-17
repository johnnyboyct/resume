import './D3CircularPack.css';

import * as d3 from 'd3';

export type TreeNode = {
  type: 'node';
  value: number;
  name: string;
  children: Tree[];
};
export type TreeLeaf = {
  type: 'leaf';
  name: string;
  value: number;
};

export type Tree = TreeNode | TreeLeaf;
export interface ID3CircularPackProps {
  width: number;
  height: number;
  data: Tree;
}

export default function D3CircularPack({ width, height, data, }: ID3CircularPackProps) {
  const kids: any =  (data as any).map((v: { level: any; }, k: any) => {
    let o = { ...v, type: 'leaf', value: v.level*10 };
    return o;
  })
  const data1: Tree = {
    type: 'node',
    name: "boss",
    value: 10,
    children: kids

  }
  const hierarchy = d3
    .hierarchy(data1)
    .sum((d) => d.value)
    .sort((a, b) => b.value! - a.value!);

  const packGenerator = d3.pack<TreeNode>().size([width, height]).padding(4);
  const root = packGenerator(hierarchy);
  return (
    <svg width={width} height={height} style={{ display: "inline-block" }}>
      {root
        .descendants()
        .slice(1)
        .map((node) => {
                      console.log('%c⧭', 'color: #e50000',  node);

          return (
            <circle
              key={node.data.name}
              cx={node.x}
              cy={node.y}
              r={node.r}
              stroke="#553C9A"
              strokeWidth={2}
              fill="#B794F4"
              fillOpacity={0.2} />
          );
        })}
      {root
        .descendants()
        .slice(1)
        .map((node) => {
                      console.log('%c⧭', 'color: #e50000',  node);

          return (
            <text
              key={node.data.value}
              x={node.x}
              y={node.y}
              fontSize={13}
              fontWeight={0.4}
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {node.data.name}
            </text>
          );
        })}
    </svg>
  );
}
