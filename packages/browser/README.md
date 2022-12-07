# @mmc-cloud/web-monitor
A commonly used web monitor lib.

### Installation

```bash
pnpm i @mmc-cloud/web-monitor
```

### Usage

```ts
import { browserMonitor, performanceReport } from '@mmc-cloud/web-monitor'
const performance = performanceReport.generateReport()
browserMonitor.report(performance, 'url')
```