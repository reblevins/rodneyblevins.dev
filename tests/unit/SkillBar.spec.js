import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import VueWaypoint from 'vue-waypoint'
import SkillBar from '@/components/SkillBar.vue'

var skillBar;

describe('SkillBar.vue', () => {
    beforeEach(function () {
        skillBar = shallowMount(SkillBar, {
            directives: {
                waypoint: VueWaypoint
            },
            propsData: {
                skill: {
                    description: 'PHP',
					length: '10+ years',
                    percent: 85
                }
            }
        })
    });
    it('should render .skill', () => {
        expect(skillBar.find('.skill'))
    })
    it('should render description', () => {
        expect(skillBar.find('.description'))
        expect(skillBar.find('.description').text()).to.contain('PHP')
        expect(skillBar.find('.description').text()).to.contain('10+ years')

    })
    it('should render bar', async () => {
        expect(skillBar.find('.bar'))
    })
    it('bar should eventually contain text "85%"', async () => {
        setTimeout(() => {
            expect(skillBar.find('.bar').text()).to.contain('85%')
        }, 900)
    })
    it('bar should contain style attr with width', async () => {
        setTimeout(() => {
            expect(skillBar.find('.bar').attributes('style')).toExist()
            expect(skillBar.find('.bar').attributes('style')).toBe('width: 85%;')
        }, 900)
    })
})
