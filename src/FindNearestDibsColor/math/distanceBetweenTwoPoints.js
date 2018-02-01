import type {Vector3} from '../typealiases';

export default function distanceBetweenTwoPoints(a: Vector3, b: Vector3): number {
    const [x0, y0, z0] = a;
    const [x1, y1, z1] = b;
    return Math.sqrt(
        Math.pow((x1 - x0), 2)
        +
        Math.pow((y1 - y0), 2)
        +
        Math.pow((z1 - z0), 2)
    );
};
