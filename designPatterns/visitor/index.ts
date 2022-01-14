import Hospital from './coomponent/hospital';
import Supermarket from './coomponent/supermarket';
import VisitorClass from './visitor';


// 定义一个访问者,用来访问和操作一些公共基础组件
// 而不需要对组件进行过大的修改
const visitor = new VisitorClass();
// 定义一个超市
const supermarket = new Supermarket();
// 定义一个医院
const hospital = new Hospital();

supermarket.accept(visitor);
hospital.accept(visitor);