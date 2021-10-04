import request from '@/utils/request'

export default {
    //带条件分页查询讲师列表
    getAllSubject(){
        return request({
            url: `/eduservice/edusubject/getAllSbject`,
            method: 'get'
          })
    }

}