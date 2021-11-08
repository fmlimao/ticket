const sonarqubeScanner = require('sonarqube-scanner')
sonarqubeScanner(
  {
    serverUrl: 'http://localhost:9000',
    options: {
      'sonar.login': '',
      'sonar.projectKey': 'Ticket',
      'sonar.projectName': 'Ticket',
      'sonar.projectVersion': '0.1.1',
      'sonar.sources': 'api/src',
      'sonar.tests': 'api/src',
      'sonar.inclusions': '**',
      'sonar.exclusions': '**/node_modules/**,**/coverage/**',
      'sonar.test.inclusions': 'api/src/**/*.spec.js,api/src/**/*.spec.jsx,api/src/**/*.test.js,api/src/**/*.test.jsx',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'coverage/test-reporter.xml'
    }
  }, () => {})
