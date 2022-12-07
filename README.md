# @mmc-group/web-monitor
A commonly used web monitor lib.

### Installation

```bash
pnpm i @mmc-group/web-monitor
```

### Usage

```ts
import { browserMonitor, performanceReport } from '@mmc-group/web-monitor'
const performance = performanceReport.generateReport()
browserMonitor.report(performance, 'url')
```