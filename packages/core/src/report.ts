export abstract class CommenReport {
  public abstract generateReport(
    message?: Record<string, any>
  ): void
}
