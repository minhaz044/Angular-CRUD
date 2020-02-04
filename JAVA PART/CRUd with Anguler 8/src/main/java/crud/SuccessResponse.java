package crud;

/**
 * Created by Teshem on 1/27/2020.
 */
public class SuccessResponse<T> extends BaseResponse {
    private T data;
    public SuccessResponse(T data){
        this.isSuccess=1;
        this.data=data;
    }
}
