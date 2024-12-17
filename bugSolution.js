```javascript
// pages/index.js

import { Suspense } from 'react';

export default async function Home() {
  const module = await import('./dynamic-module'); // Use async/await

  return (
    <div>
      <h1>Hello, world!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <module.DynamicComponent/>
      </Suspense> 
    </div>
  );
}

//pages/dynamic-module.js
export const DynamicComponent = () => {
  return <div>This is my dynamically imported component</div>
}
```