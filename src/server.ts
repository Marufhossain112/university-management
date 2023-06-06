import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'
// import { logger } from './shared/logger'
async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Server connected successfully')
    app.listen(config.port, () => {
      logger.info(`Server is  listening on port  ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Server failed to connect', error)
  }
}
main()
