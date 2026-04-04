export interface ReviewComment {
  id: string
  filePath: string
  side: 'deletions' | 'additions'
  lineNumber: number
  lineContent: string
  body: string
  status: 'open' | 'resolved'
  createdAt: number
}
