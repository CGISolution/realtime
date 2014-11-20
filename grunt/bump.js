/**
 *  Usage: (Sarting with v0.0.1)
 *      grunt bump - v.0.02
 *      grunt bump:patch - v0.0.3
 *      grunt bump:minor - v0.1.0
 *      grunt bump:major - v1.0.0
 *      grunt bump:prerelease - v1.0.0-1
 *      grunt bump:git
 */

module.exports = {
    options: {
        files: ['package.json', 'config'],
        updateConfigs: [''],
        commit: true,
        commitMessage: "Release v%VERSION%",
        commitFiles: ['-a'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'origin',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
    }
};
